create database academic_erp;

use academic_erp;

create table alumni(
		id bigint PRIMARY KEY AUTO_INCREMENT,
		first_name VARCHAR(255) NOT NULL,
		last_name VARCHAR(255) NOT NULL,
		email VARCHAR(255) UNIQUE NOT NULL,
		password VARCHAR(255) NOT NULL,
		contact_no	VARCHAR(10)	NULL
);

create table alumni_organization(
		id bigint PRIMARY KEY AUTO_INCREMENT,
		joining_date VARCHAR(255) NOT NULL,
		leaving_date VARCHAR(255) NOT NULL,
		position VARCHAR(255) UNIQUE NOT NULL,
		alumni_id bigint NOT NULL
);

create table alumni_education(
		id	bigint	PRIMARY KEY AUTO_INCREMENT,
		address	VARCHAR(255) NOT NULL,
		college_name VARCHAR(255) NOT NULL,
		degree VARCHAR(255) UNIQUE NOT NULL,
		joining_year int NOT NULL,
		passing_year int NULL,
        alumni_id bigint NOT NULL
);

ALTER TABLE alumni_organization ADD foreign key (alumni_id) REFERENCES alumni(id);

ALTER TABLE alumni_education ADD foreign key (alumni_id) REFERENCES alumni(id);









