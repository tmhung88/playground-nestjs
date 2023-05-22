import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { dbConfigFactory, DbConnectionConfig } from 'src/config/db.config';
import { appConfigFactory } from 'src/config/app.config';
import { LoggerModule } from 'nestjs-pino';
import { TodoModule } from 'src/todo/todo.module';

@Module({
  imports: [
    LoggerModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfigFactory, dbConfigFactory],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        ...configService.get<DbConnectionConfig>('postgres'),
        type: 'postgres',
        entities: ['dist/src/**/*.entity.js'],
        logging: false,
      }),
    }),
    TodoModule,
  ],
})
export class AppModule {}
