import { fakeAsync, tick, flush, async, flushMicrotasks } from '@angular/core/testing';
import { promise } from 'protractor';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

describe('Async Testing', () => {
    it('Async test with done', (done: DoneFn) => {
        let test = false;
        setTimeout(() => {
            test = true;

            expect(test).toBeTruthy();

            done();
        }, 1000);
    });

    it('Async test - fakeAsync tick', fakeAsync(() => {

        let test = false;

        setTimeout(() => {
            test = true;

            expect(test).toBeTruthy();


        }, 1000);

        tick(500);
        tick(500);

        expect(test).toBeTruthy();


    }));

    it('Async - fakse async flush', fakeAsync(() => {
        let test = false;

        setTimeout(() => { });

        setTimeout(() => {
            test = true;
        }, 1000);

        flush();

        expect(test).toBeTruthy();
    }));


    it('Async - promise microtask and fakeasync', fakeAsync(() => {
        let test = false;
        console.log('before promise');

        Promise.resolve().then(() => {
            console.log('inside promise');
            test = true;
        });

        flushMicrotasks();

        console.log('After Promise');

        expect(test).toBeTruthy();
    }));

    it('Async - Sync Observable', () => {
        let test = false;
        console.log('before obs');

        const obs$ = of(test);
        obs$.subscribe(() => {
            test = true;
            console.log('inside obs');
        });

        console.log('After obs');

        expect(test).toBeTruthy();
    });

    it('Async - Async Observable with tick', fakeAsync(() => {
        let test = false;
        console.log('before obs');

        const obs$ = of(test).pipe(delay(1000));
        obs$.subscribe(() => {
            test = true;
            console.log('inside obs');
        });

        console.log('After obs');

        tick(1000);

        expect(test).toBeTruthy();
    }));

    it('Async - Async Observable with done', ((done: DoneFn) => {
        let test = false;
        console.log('before obs');

        const obs$ = of(test).pipe(delay(1000));
        obs$.subscribe(() => {
            test = true;
            console.log('inside obs');
            expect(test).toBeTruthy();
            done();
        });

        console.log('After obs');


    }));

    it('Async - Async Observable with async', async(() => {
        let test = false;


        const obs$ = of(test).pipe(delay(1000));
        obs$.subscribe(() => {
            test = true;

            expect(test).toBeTruthy();
        });




    }));

});
