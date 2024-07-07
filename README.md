# threesync

sync your local folders with git & gdrive. Completely for free & OSS!!

![architecture-diagram.svg](./architecture-diagram.svg)

## Milestones
  ### private
  - [ ] send files from system to gdrive via api. (post)
  - [ ] get files from drive to local. (get)
  - [ ] delete files from drive. (delete)
  - [ ] subscribe to changes in gdrive w/ api.
  - [ ] subscribe to changes from git. [[pub/sub]] [[algos]]
  - [ ] one action to rule them all.

  ### public
  - [ ] get github access
  - [ ] get gdrive access
  - [ ] run action and store lfs git in github of user account. 

## Contributing:
- First set up a google project and then create a oauth consent screen
- Then create credentials and put the credentials in the env file

.env should have the below with values:
```js
const CLIENT_ID = '';
const CLIENT_SECRET = '';
const REFRESH_TOKEN = '';
const REDIRECT_URI = '';

```

Made with love ♥ by [@bupd](https://github.com/bupd)

