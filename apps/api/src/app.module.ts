import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ServeStaticModule} from "@nestjs/serve-static";
import {join} from 'path'
import {BoardModule} from './board/board.module';
import {TasksModule} from './tasks/tasks.module';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {TypeOrmModule} from "@nestjs/typeorm";
import { HistoryModule } from './history/history.module';
import { SubListModule } from './sub_list/sub_list.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../..', 'client', 'dist'),
    }),
    BoardModule,
    TasksModule,
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory:(configService: ConfigService)=>({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        synchronize: true,
        autoLoadEntities:true
      }),
      inject: [ConfigService]
    }),
    HistoryModule,
    SubListModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
