
CREATE TABLE USER (
                         ID int,
                         NAME varchar(255),
                         TYPE int,
                         DESCRIPTION varchar(255),
                         CREATION_TIME TIMESTAMP



);


insert into USER (ID,NAME,TYPE,DESCRIPTION,CREATION_TIME)values (1,'amir',1,'person',sysdate())