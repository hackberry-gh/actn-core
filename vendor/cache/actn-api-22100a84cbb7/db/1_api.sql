SET search_path TO public;

SELECT plv8_startup();

SELECT __create_table('core','clients');
SELECT __create_index('core','clients', '{"cols": { "apikey": "text", "domain": "text" },"unique": true}');

SELECT __create_table('core','users');
SELECT __create_index('core','users', '{"cols": {"email": "text"},"unique": true}');

SELECT __create_table('core','templates');
SELECT __create_index('core','templates', '{"cols": {"filename": "text"},"unique": true}');