import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HotelsModule } from './hotels/hotels.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { LeisurePlacesModule } from './leisure-places/leisure-places.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/hotel-management'),
    HotelsModule,
    RestaurantsModule,
    LeisurePlacesModule,
    CommentsModule,
  ],
})
export class AppModule {}