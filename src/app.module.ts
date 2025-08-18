import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { AuthController } from './modules/auth/auth.controller';
import { RolesModule } from './modules/roles/roles.module';

@Module({
  imports: [UsersModule, RolesModule],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
