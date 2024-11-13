import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export const AlreadyHaveAccount = () => {
  return (
    <Typography sx={{ textAlign: 'center', paddingTop: '1rem', paddingBottom: '0.7rem' }}>
      Already have an account?{' '}
      <span>
        <Link
          href="#"
          variant="body2"
          sx={{ alignSelf: 'center' }}
        >
          Sign in
        </Link>
      </span>
    </Typography>
  )
}
