import { Component, Input } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-block',
  templateUrl: './user-block.component.html',
  styleUrl: './user-block.component.css'
})
export class UserBlockComponent {
  @Input() user: any;

  constructor(private userService: UserService){}

  deleteUser(id: any): void {
    this.userService.deleteUser(id).subscribe(
      response => {
        console.log('User deleted successfully:', response);
        // Обработайте успешное удаление пользователя здесь
      },
      error => {
        console.error('Error deleting user:', error);
        // Обработайте ошибку удаления пользователя здесь
      }
    );
  }
}
