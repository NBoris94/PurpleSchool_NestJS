import { Injectable } from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Review, ReviewDocument} from './models/review.model';
import {Model, Schema} from 'mongoose';
import {CreateReviewDto} from './dto/create-review.dto';

@Injectable()
export class ReviewService {
    constructor(@InjectModel(Review.name) private readonly reviewModel: Model<ReviewDocument>) {}

    async create(dto: CreateReviewDto) {
        const createdReview = new this.reviewModel(dto);
        return createdReview.save();
    }

    async delete(id: string) {
        return this.reviewModel.findByIdAndDelete(id).exec();
    }

    async findByProductId(productId: string) {
        return this.reviewModel.find({ productId }).exec();
    }

    async deleteByProductId(productId: string) {
        return this.reviewModel.deleteMany({ productId }).exec();
    }
}
