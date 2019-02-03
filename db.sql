create database if not exists fishinanet;

use fishinanet;

create table LogEntry (
    id      int not null auto_increment,
    dt      timestamp default current_timestamp,
    info    text,

    primary key (id)
);

create table User (
    id      int not null auto_increment,
    name    varchar(255) not null,
    pass    varbinary(32) not null,
    salt    varbinary(32) not null,
    ts      timestamp default current_timestamp on update current_timestamp,
    dt      timestamp default current_timestamp,

    primary key (id)
);

create table HabitatType (
    id      int not null auto_increment,
    name    varchar(255) not null,

    primary key (id)
);

create table Habitat (
    id      int not null auto_increment,
    name    varchar(255) not null,
    habitatTypeId   int not null,

    primary key (id),

    foreign key (habitatTypeId)
        references HabitatType(id)
        on update cascade
        on delete restrict
);

create table TempReading (
    id      int not null auto_increment,
    habitatId   int not null,
    temp    double precision not null,
    dt      timestamp default current_timestamp,

    primary key (id),

    foreign key (habitatId)
        references Habitat(id)
        on update cascade
        on delete restrict
);

create table MassReading (
    id      int not null auto_increment,
    habitatId   int not null,
    mass    double precision not null,
    dt      timestamp default current_timestamp,

    primary key (id),

    foreign key (habitatId)
        references Habitat(id)
        on update cascade
        on delete restrict
);
