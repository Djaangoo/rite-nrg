import * as fromTeams from './teams.actions';

describe('loadTeamss', () => {
  it('should return an action', () => {
    expect(fromTeams.loadTeamss().type).toBe('[Teams] Load Teamss');
  });
});
