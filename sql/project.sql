create table authority
(
    member_id int         not null,
    name      varchar(20) not null,
    primary key (member_id, name),
    constraint authority_ibfk_1
        foreign key (member_id) references member (id)
);

