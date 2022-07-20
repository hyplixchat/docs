# HyplixChat documentation  

## API
  The full documentation for the api can be found [here](./api/api.md).
  |   Endpoints                        |  Actions                                                  |
  |------------------------------------|-----------------------------------------------------------|
  | **/auth/login**                    |  Login to an existing account.                            |
  | **/auth/register**                 |  Register a new account.                                  |
  | **/auth/changepassword**           |  Change the password to an existing user.                 |
  | **/channels/global/messages**      |  Get all of the messages in the global chat.              |
  | **/channels/global/messages/{id}** |  Delete a message with the supplied id in global chat.    |
  | **/channels/global/text**          |  Post a message of the type text.                         |
  | **/users/me**                      |  Get info of the currently logged in account.             |
  | **/users/{id}**                    |  Get info of the account that has the supplied id.        | 
## cli-tool
  The full documentation for the cli-tool can be found [here](./cli-tool/cli-tool.md)
  
## Licensing
  All projects by the hyplix team are mainly licensed with the GNU General Public License 3.0 which can be found [here]([./api/api.md](https://www.gnu.org/licenses/gpl-3.0.txt)).
## credits
  ### [MCorange](https://github.com/MCorange99)
   - **Frontend**(js)  
       The actual website, making it look nice or at least as good as he can make it.
   
   - **Cli testing tool**(rust)  
       Testing tool for early development. increadibly usefull to find bugs early,
       also can be adapted for a pc app later on.

   - **Hosting**(vps, ubuntu linux)  
       Making use of the free resources by oracle, with pain from the shit ui in oracle cloud panel and the broken default ubuntu install,
       this man can do anything on linux given enough time. While you are reading this 3 minecraft servers, 2 discord bots, like 3 api\`s
       and a bunch of other shit i cant remember are running on his vps. He is the only man that can stop Colderry.

   - **Security**(Hosting)
       while Colderry is making sure the code is secure and without bugs, MCorange is making sure noone can hack the Server,
       hardening the machine, looking out for any ddos atacks.
         
       
  ### [Colderry](https://github.com/colderry)
   - **Backend**(js)  
       The whole brains of the operation, from the rest api to the websockets, made with increadible structure.
       His only weakness is css.

   - **Security**  
       From making sure your messages are safe, stopping weirdos from reading your messages, 
       to fixing simple mistakes like leaving sensitive info in the code. This man is making sure all of us are safe.
