import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css'] // Corrected property name to styleUrls
})
export class UserdetailComponent implements OnInit {
  id: any;
  user: any;

  key: string = 'migris';
  value: string = '';

  constructor(private http: HttpClient, private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    })

    this.getUser();
  }


  getUser() {
    this.userService.getUser(this.id).subscribe(user => {
      console.log(1)
      this.user = user;

      // Добавляем класс для изменения цвета тени на зеленый
      document.querySelector('.user-wrapper')?.classList.add('green-shadow');

      // Удаляем класс через 1 секунду
      setTimeout(() => {
        document.querySelector('.user-wrapper')?.classList.remove('green-shadow');
      }, 1000);
    });
  }

  sendChange(id: any) {
    this.userService.sendChange(this.id, this.key, this.value).subscribe(
      response => {
        this.getUser()
      },
    );
  }
}
