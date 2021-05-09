import { currentUserReducer, initialState } from './current-user.reducer';

describe('CurrentUser Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = currentUserReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
