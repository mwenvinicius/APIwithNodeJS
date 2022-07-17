drop table produto;

create table if not exists produto(
	id_produto int,
	nome varchar(45) not null,
	preco float not null,
	primary key(id_produto)
);

create table if not exists pedido(
	id_pedido int primary key,
	id_produto int,
	quantidade int not null,
	foreign key (id_produto) references produto (id_produto)
);

insert into produto (id_produto,nome,preco) values(1,'Coxinha',4.50);