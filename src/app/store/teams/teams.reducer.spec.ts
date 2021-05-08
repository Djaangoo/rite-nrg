import { teamsReducer, initialState } from './teams.reducer';

describe('Teams Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = teamsReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
