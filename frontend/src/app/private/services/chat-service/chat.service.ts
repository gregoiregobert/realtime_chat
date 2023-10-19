import { Injectable } from '@angular/core';
import { CustomSocket } from '../../sockets/custom-socket';
import { RoomI, RoomPaginateI } from 'src/app/model/room.interface';
import { UserI } from 'src/app/model/user.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket: CustomSocket, private snackbar: MatSnackBar) { }

  sendMessage() {
  }

  getMessage() {
	return this.socket.fromEvent('message');
  }

  getMyRooms(): Observable<RoomPaginateI> {
	return this.socket.fromEvent<RoomPaginateI>('rooms');
  }

  emitPaginateRooms(limit: number, page: number) {
	this.socket.emit('paginatrRooms', {limit, page});

  }

  createRoom(room: RoomI) {
	this.socket.emit('createRoom', room);
	this.snackbar.open(`Room ${room.name} creatded succefully`, 'Close' ,{
		duration: 2000, horizontalPosition: 'right', verticalPosition: 'top'
	} );
  }
}
