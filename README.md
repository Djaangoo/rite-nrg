
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## User Stories
Imagine an API that exposes methods that supports following User Stories: 

1.
> As a User\
> I want to be able to create a new counter\
> So that steps can be accumulated for a team of one or multiple employees

                                as Team Member -> Add Task -> Create Task
    Teams list -> Team Page -> 
                                as Normal User -> 🚫

2.
> As a User\
> I want to be able to increment the value of a stored counter\
> So that I can get steps counted towards my team's score

                                as Team Member -> Add Task -> Create Task
    Teams list -> Team Page -> 
                                as Normal User -> 🚫


3.
> As a User\
> I want to get the current total steps taken by a team\
> So that I can see how much that team have walked in total

    Teams list -> Team Page 

4.
> As a User\
> I want to list all teams and see their step counts\
> So that I can compare my team with the others

    Teams list

5.
> As a User\
> I want to list all counters in a team\
> So that I can see how much each team member have walked

    Teams list -> Team Page

6.
> As a User\
> I want to be able to add/delete teams\
> So that I can manage teams

    Teams list -> Add Team -> Modal, Required: [Name, Members] (creator is a Team Member) -> create Team -> Team Created

                                as Team Member -> Remove Team -> confirm -> Team Removed
    Teams list -> Team Page -> 
                                as Normal User -> 🚫


7.
> As a User\
> I want to be able to add/delete counters\
> So that I can manage team member's counters

                                as Team Member -> choose task -> Remove task -> confirm -> Task removed
    Teams list -> Team Page -> 
                                as Normal User -> 🚫