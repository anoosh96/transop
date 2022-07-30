# README

Rails server
Postgres SQL
ElasticSearch NOSQL 
GQL API, apollo
Angular 13 frontend


env to provide:
TRANSPO_DB_USERNAME
TRANSPO_DB_PASSWORD
TRANSPO_DB_HOST
TRANSPO_DB_PORT




landing page
	about
	communities
	contact us
	register / login

register
	create user
	email confirmation
	community_admin / member?
		if admin -> create community
		if member -> request to join community

community
	can have only one admin
	can have many members, can invite and kick members
	members have roles, admin can define new roles
	default roles are: admin, member
		- admin: can do everything
		- member: can view everything
	roles define access rights to community features
	community has many features

features
	landing page
		- about the community, its members, contacts
	news
		- admins can create news articles
	members + contacts page
		- lists all members, shows contacts of the members who want to be shown
	calendar + events
		- lists important dates
	poll
		- can ask members to vote on a specific question / initiative / campaign
		- e.g. do we need a new road?
	notifications
		- members can subscribe to notifications from community 
		- admin and some roles can send notifications to all members of community
	campaign
		- crowdfund from members of the community or externally from everyone
		- e.g. fund a new road
		- if campagin is successfull, it becomes an initiative
	initiative
		- track progress related to an initiative
			- expenses, progress reports, incidents
		- e.g. funds were recieved for road construction, track progress of the build here
	chatrooms
		- 1 to 1 or many to many chatrooms for the community

