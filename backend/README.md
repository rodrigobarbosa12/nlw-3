
#yarn typeorm mostra um log com vários comandos

# Cria tabela
- yarn typeorm migration:create -n create_nomeDaTabela

# Executa a migration
- yarn typeorm migration:run

# Revert a migration
- yarn typeorm migration:revert