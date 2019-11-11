import { db } from './../db';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { FeedService } from './feed.service';
import { Item } from '../item.interface';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

let httpController: HttpTestingController;
describe('FeedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: FeedService = TestBed.get(FeedService);
    expect(service).toBeTruthy();
  });

  it('should get feed with params', () => {
    const service: FeedService = TestBed.get(FeedService);
    const items = db;

    service.getFeed(0).subscribe((res: Item[]) => {
      expect(res).toBeTruthy();
      expect(res.length).toEqual(12);
      expect(res[0]._id).toEqual(items[0]._id);
    });

    const req = httpController.expectOne(service.BASE_URL + '?page=0');

    expect(req.request.method).toEqual('GET');
    expect(req.request.params.get('page')).toEqual('0');

    req.flush(items);

    httpController.verify();

  });


  it('can test for network error', () => {

    const service: FeedService = TestBed.get(FeedService);
    service.getFeed(0).subscribe(
      (res) => fail(),
      (error: HttpErrorResponse) => {
        console.log(error);
        expect(error.status).toBe(500);
        expect(error.error.message).toEqual('Internal Server Error');
      }
    );

    const err = new ErrorEvent('server error', {message: 'Internal Server Error'});

    const req = httpController.expectOne(service.BASE_URL + '?page=0');
    req.error(err, { status: 500 });
  });

});
