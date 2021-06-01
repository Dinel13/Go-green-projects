./cloud_sql_proxy -instances=our-philosophy-314515:asia-southeast2:b21-cap0199=tcp:3306
mysql -u root -p --host 127.0.0.1 --port 3306

DELETE FROM `table_name` WHERE `id` BETWEEN 3 AND 10;

https://developers.google.com/oauthplayground/
https://stackoverflow.com/questions/19766912/how-do-i-authorise-an-app-web-or-installed-without-user-intervention/19766913#19766913
https://stackoverflow.com/questions/66058279/token-has-been-expired-or-revoked-google-oauth2-refresh-token-gets-expired-i

client id = 116294561602-nd6vkb3lj0okd91i1jcjj610n7qk0sih.apps.googleusercontent.com
secret = cHyRdvFBmZl5kT4SuWgAOsWq

{
"access_token": "ya29.a0AfH6SMD3oTKDyAF_go4Z_zZ06Ip4J6mEp_6IKTLGfzTywroer6wIJgjuft0z7vzbsFTUNgDDFElFm2QeFINQYXcP-DKzOiK1ZDyOymdn9YHtkE50K937g_onmfehpnc1IU4QUZ8MQVaB1WtSYBUBKpp05oe0",
"scope": "https://mail.google.com/",
"token_type": "Bearer",
"expires_in": 3599,
"refresh_token": "1//04OOPBMcB76MgCgYIARAAGAQSNwF-L9Irldu2Y73t4bK-Jp7LjOiAXWuCPNEcjQgZ8il7quT7zdHWeKGZXH2DoALzoJdVTLxhOkM"
}
