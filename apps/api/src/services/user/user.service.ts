import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  get() {
    return { id: 'kj86sdfhk6sdh', name: 'Foo', country: 'Italy' };
  }

  getUser(param: { userId: number }) {
    return {
      id: param.userId,
      name: 'Foo',
      country: 'Argentina',
    };
    // return param;
  }

  getUsers() {
    return [
      { id: 'sdfdsf', name: 'Foo', country: 'United State' },
      { id: 'sdfdsf4425dsfs', name: 'Baz', country: 'France' },
      { id: '452sdre679dffdsf', name: 'Bar', country: 'Italy' },
    ];
  }
}
