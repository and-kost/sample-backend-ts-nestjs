import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
  @IsString({message: 'Should be string'})
  @IsEmail()
  readonly email: string

  @IsString({message: 'Should be string'})
  @Length(4, 255, {message: 'Length should be 4 - 255 symbols'})
  readonly password: string
}
