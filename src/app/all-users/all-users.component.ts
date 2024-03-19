import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  users: any[] = [];
  private userDeletedSubscription!: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
    this.subscribeToUserDeleted();
    this.userDeletedSubscription = new Subscription();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  deleteUser(userId: any): void {
    this.userService.deleteUser(userId).subscribe(
      () => {
        console.log('User deleted successfully.');
      },
      error => {
        console.error('Error deleting user:', error);
      }
    );
  }

  private subscribeToUserDeleted(): void {
    this.userDeletedSubscription = this.userService.userDeleted$.subscribe(userId => {
      // Удаляем пользователя из списка
      this.users = this.users.filter(user => user.id !== userId);
    });
  }

  ngOnDestroy(): void {
    this.userDeletedSubscription.unsubscribe();
  }
}
