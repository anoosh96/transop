## Transparent Politics (maybe Katata, maybe something else entirely)


A platform for online community presence. A website designed to simplify the aspects of coordinating shared activities and achieve common goals.
When a group of people gathers around a common long term goal, natural needs occur - such as definition of roles, responsibilities, initiatives, election of leaders, gathering and expression of opinion, decision making, information sharing, internal communications, analytics gathering and tracking. These processees are (if done at all) usually done ad-hoc, on a one off basis, word of mouth, and/or through extensive paperwork, recurring meetings, multiple sources of truth. We believe that in order to achieve long term communal success, these processees must be standardized, centralized, automated where possible, as well as made transparent for everyone involved - hence the name. 

On the transparent politics website, a user can register an account, and then create or join a existing community. They can view the public pages of other public communities as well. Once a community is created, it gets its own public page, similar to how Shopify creates a store. Members of the community can interact with their public page in various ways, based on the roles that they have within the community. 
Admins of the community can define what features the community has by enabling modules. Some base modules are provided by us. Additional modules can be custom coded, or selected from a previously submitted and approved set, in an "app-store"-like fashion. Some examples of modules are: News, Events, Blog, Initiatives, Funding etc. 

Admins can create and define roles for their community members. Roles define interactions provided to members by specific modules, as well as the overall community page. E.g. some roles allow creation of blog posts and deletion of comments, while other roles only allow read-only access to content.
We believe that our solution will promote collaboration, spark community initiatives, help old initiatives run more efficiently and transparently. We also believe that our solution may help certain communities attract external investment and build higher trust.

Through the use of the transparent politics process, a community can take advantage of automatic record keeping, async decision making, easy communication, analytics. Any member can easily find relevant news and announcements, subscribe to wanted notifications and updates. They can easily propose, gather opinion on, fund, and execute intiaitves. If members chose to do so, they can leverage social media integrations in order to gather a larger audience for their intiaitves. Automated goal setting and reporting into intiaitve execution allows members to provide visibility for their audiences, keeping themselves accountable while increasing support, as well as trust. 

Lastly, public communities can take advantage of member recruitment (proximity, shared interests, ads), while regular users may leverage the public community index page to find communities of interest, browse their historic data, subscribe to them, and/or request to join them.


### MVP Feature set

- Base Tranpasrent Polics
	- Supports multiple languages through out the entire website (En / Ukr / Ru to start)
	- Landing page - about us, examples of successful communtities, user registration, contact
	- Communitites index page with search sort filter (on public communities only)
	- User can create / request to join a public community
	- User may subscribe to public community notifications, without being a member of it
	- Each community is an independent page, with its own domain
	
- Within a community
	- A community can be private or public
	- A community has a landing page 
		- few basic themes
		- manipulation of content location, presense, menus, wysiwyg.
		- each activated module surfaces links and components that can be leveraged
	- A community has members
		- can be invited
		- have basic contact info, can pick what info is private and what is public
		- have subscriptions to different events, initiatives, etc
	- A community has roles that can be imposed onto members
		- Base roles: Admin, Member
		- New roles can be defined. Each role has very granular access control over each module (view, create, update, delete, comment, etc etc)
	- A community has modules that define use cases and features it needs
		- Base modules:
			- Members
				- contact info, +1s, comments, status, role, activity
			- News / Announcements
			- Calendar / Events
			- Notifications / Subscriptions
				- member mailing lists
			- Member to member messaging, group chats
			- Forms
				- basic contact form
				- agreements, proposals, contracts
			- Polls
			- Media
				- Pictures / Videos
			- Blog
			- Property Ownership / Use (land, house, appartment, room)
				- if member propery ownership is involved, allows for different functionality and data gathering on it
			- Resource give away / sharing / lending / rental  
				- sharing tools - one member has a saw, another a hammer. one has a truck, another a boat.
				- giving away goods - i grew too many apples, here take some whoever wants any 
				- here rent my cottage for a few months since i am on vacation, the pool is epic
			- Initiatives
				- can be connected to polls
				- description
				- requirements
				- goals, milestones, deadlines
				- reporting
			- Fund gathering
				- can be connected to initiatives
				- Expense monitoring and stats
			- Reccurring expenses
				- bills, membership dues, fees, etc
			- Social media integrations
				- Sync updates
				- SSO for members
		- Admin can add  / remove modules to their community, as well as define specific access rights and responsibilities for each role
		- New modules can be written and added by third party developers through "app store"-like functionality
	- Members of the community can interact with modules. 
		- Create an initiative (We want to build a road)
		- Create a poll for the initiative (Does everyone else want to build the road too?)
		- Fund the initiative (Given most people wanted to build a roach, we need $5000, please donate)
		- Report progress, goal checks, milestones achieved, expensess incurred
			- receipts of expenses, blockers encountered.
		- Create events (We want to have a community BBQ)
		- Subscribe to event notifications (Reminders for events, Notifications of checkpoints met in initiatives)
		- Comment and vote on things (posts, news, annoucenemnts, other comments, pictures, videos, member's activities).
	- Members of community can interact with each other
		- View individual member / role responsibilities and their accomplishment logs (Member N is resonsible for Electric pole inspections every month, here are their inspection results)
		- Message members, collaborate, ask for information (Why is the cieling leaking? Can I buy your land?)
		- Create group chats and mini forums / threads


### Potential Use cases

- A group of individuals running an eco farm want to keep track of their work and streamline the daily process. (Sub plot ownership definition, membership responsibilities, agreements, expense tracking)
- Members of a high rise building want to create a coop to facilitate some activities in their building (child daycare, paint the lobby, plant some flowers, BBQ, swimming pool sundays)
- Large family or a group of friends are organizing a large event (or ritual) (holiday, a monthly meeting at the sauna, camping)
- Gated Community wants to track their initiatives and facilitate the community membership fee gathering, contract agreements and communication through a central hub. (Do we want to install cameras? Is the security good enough? Should we hire a bus to take out the kids to the park every saturday? Who forgot to pay for tree trimmings this month?)
- A group of volunteers decided to fundraise for a kids park, then track their expenses and report on activities.
- An internal platform for business employees to use for activities, contact info, fund gathering (birthday presents, parties), record keeping, stimulating good humanity - somewhat Shopify's Unicorn?
- Bike clubs, Yacht clubs, Rowing crews, Minor sports leagues, kids camps and camping grounds, large ecological initiatives (#teamtrees #teamseas etc), forest planting, volunteering initiatives.
- With the idea of "modules" being expandable, and user defined, eventually Transparent Politics becomes a platform for a community, and the specific needs and functions of each community can picked and chosen from an "app store" like experience. 
	Examples of potential modules:
	- someone writes a module for World of Warcraft API integration, so a guild can have a frontpage for their members. 
	- someone writes a Shopify module to add an online store intergarition to the community - so our members can integrate their Shopify stores, maybe creating one large store for the entire community (one produces hand knit socks, another produces straw hats, another produces birch tree syrop, they all have their individual stores, but also contribute to one shares store in the community) 
	- someone writes a module for Dungeons and Dragons rulesets



### Project Setup

- clone down this repo `git clone git@github.com:kirka121/transop.git`
- install rvm `https://rvm.io/rvm/install`
- install ruby 3.1.2 `rvm install 3.1.2`
- check the default version ov ruby with [ruby -v], if is not 3.1.2, set default in rvm `rvm default 3.1.2`
- run `bundle` in this repo, it will install rails and all the other dependencies
- install pgadmin - UI interface for postgres. If you prefer CLI, you too pro and don't need this guide
- change default postgres password:
```
	psql -U postgres
	alter user postgres with password 'postgres';
```
- reload pg configuration 
```
	From the command line: pg_ctl reload
	From within a db (as superuser): select pg_reload_conf();
	From PGAdmin: right-click db name, select "Reload Configuration"
```
- set these ENV in your bashrc / zshrc:
```
	export TRANSPO_DB_USERNAME='postgres'
	export TRANSPO_DB_PASSWORD='postgres'
	export TRANSPO_DB_HOST='localhost'
	export TRANSPO_DB_PORT='5432'
```
- reload zshrb /bashrc `source ~/.zshrc` || `source ~/.bashrc`
- create and migrate the database: 
```
	rake db:create
	rake db:migrate
```
- start the backend with `rails s`
- switch to a new terminal window
- install node && npm `sudo apt install nodejs npm`
- install angular cli `sudo npm install -g @angular/cli`
- install npm packages `npm install`
- start frontend server `ng serve`
