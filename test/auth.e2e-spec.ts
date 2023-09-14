import {AuthDto} from '../src/auth/dto/auth.dto';
import {INestApplication} from '@nestjs/common';
import {Test, TestingModule} from '@nestjs/testing';
import {AppModule} from '../src/app.module';
import * as request from 'supertest';
import {disconnect} from 'mongoose';

const loginDto: AuthDto = {
    login: 'admin@test.ru',
    password: '1Q2w3e4R_!'
};

const wrongLoginDto: AuthDto = {
    login: 'admina@test.ru',
    password: '1Q2w3e4R_!'
};

const wrongPasswordDto: AuthDto = {
    login: 'admin@test.ru',
    password: '1Q2w3e4R_!11'
};

describe('AuthController (e2e)', () => {
    let app: INestApplication;

    beforeEach(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    it('/auth/login (POST) - success', async () => {
        return request(app.getHttpServer())
            .post('/auth/login')
            .send(loginDto)
            .expect(200)
            .then(({ body }: request.Response) => {
                expect(body.access_token).toBeDefined();
            });
    })

    it('/auth/login (POST) - fail login', async () => {
        return request(app.getHttpServer())
            .post('/auth/login')
            .send(wrongLoginDto)
            .expect(401, {
                statusCode: 401,
                message: 'Пользователь с таким email не найден',
                error: 'Unauthorized'
            })
    })

    it('/auth/login (POST) - fail password', async () => {
        return request(app.getHttpServer())
            .post('/auth/login')
            .send(wrongPasswordDto)
            .expect(401, {
                statusCode: 401,
                message: 'Неверный пароль',
                error: 'Unauthorized'
            })
    })

    afterAll(() => {
        disconnect()
    })
});
