import { AuthGuard } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";

@Injectable()
export class JwtAuthenticationGuard extends AuthGuard('jwt') {}