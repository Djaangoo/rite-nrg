import * as fromCurrentUser from './current-user.actions';

describe('loadCurrentUsers', () => {
  it('should return an action', () => {
    expect(fromCurrentUser.loadCurrentUsers().type).toBe('[CurrentUser] Load CurrentUsers');
  });
});
