import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Book } from '../book';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.scss']
})
export class BookInfoComponent implements OnInit {

  constructor(private afs: AngularFirestore) { }

  booksCollection: AngularFirestoreCollection<Book>;
  booksObservable: Observable<Book[]>

  ngOnInit() {
    this.booksCollection = this.afs.collection('books');
    this.booksObservable = this.booksCollection.valueChanges();
  }

}
