import { async, TestBed } from '@angular/core/testing';

import { MdDataTableColumnComponent } from './md-datatable-column.component';
import {
  MdDatatableDispatcher,
  MdDatatableStore,
  STORE_INITIAL_STATE,
} from './md-datatable.store';
import { DatatableReducer } from './md-datatable.reducer';
import { MdDatatableActions } from './md-datatable.actions';

describe('MdDataTableColumnComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        MdDataTableColumnComponent,
      ],
      providers: [
        { provide: STORE_INITIAL_STATE, useValue: {} },
        { provide: DatatableReducer, useClass: DatatableReducer },
        { provide: MdDatatableDispatcher, useClass: MdDatatableDispatcher },
        { provide: MdDatatableStore, useClass: MdDatatableStore },
        { provide: MdDatatableActions, useClass: MdDatatableActions },
      ],
    }).compileComponents();
  }));

  it('should create the component', async(() => {
    const fixture = TestBed.createComponent(MdDataTableColumnComponent);
    const instance = fixture.debugElement.componentInstance;
    expect(instance).toBeTruthy();
  }));
});
