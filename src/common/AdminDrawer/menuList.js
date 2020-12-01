import MovieIcon from '@material-ui/icons/Movie'
import VideocamIcon from '@material-ui/icons/Videocam'
import PeopleIcon from '@material-ui/icons/People'
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const prefix = '/dashboard'

export default [
  { title: 'Users', href: `${prefix}/users`, icon: AccountBoxIcon },
  { title: 'Movies', href: `${prefix}/movies`, icon: MovieIcon },
  { title: 'Actors', href: `${prefix}/actors`, icon: PeopleIcon },
  { title: 'Directors', href: `${prefix}/directors`, icon: VideocamIcon },
]
