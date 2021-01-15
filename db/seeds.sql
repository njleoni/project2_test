CREATE TABLE projects
(
	id int NOT NULL AUTO_INCREMENT,
	project_name varchar(255) NOT NULL,
	project_status ENUM('New', 'Active', 'Hold', 'Complete') DEFAULT 'New',
    project_manager varchar(255),
    percent_complete INT,
    due_date DATE,
    start_date DATE,
    end_date DATE,
	PRIMARY KEY (id)
);


INSERT INTO projects (project_name, project_status, project_manager, percent_complete, start_date, end_date) VALUES ('CSU', 'New', 'John Doe', 0, '2021-01-01', '2021-01-05' );
INSERT INTO projects (project_name, project_status, project_manager, percent_complete, start_date) VALUES ('CU', 'Active', 'Barney Rubble', 15, '2021-01-01');
INSERT INTO projects (project_name, project_status, project_manager, percent_complete) VALUES ('DU', 'Hold', 'Barney Rubble', 0);
INSERT INTO projects (project_name, project_status, project_manager, percent_complete, start_date) VALUES ('NCAR', 'Active', 'John Doe', 90, '2020-10-01');
INSERT INTO projects (project_name, project_status, project_manager, percent_complete, start_date, end_date) VALUES ('NOAA', 'Complete', 'John Doe', 100, '2020-07-01', '2020-11-05' );


SELECT * FROM projects;