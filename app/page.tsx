import { SportsEsportsRounded } from "@mui/icons-material";
import { Card, CardContent, Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth={false} sx={{
      backgroundImage: 'url(/creepy-fnaf-background.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Container maxWidth='lg'>
        <Card sx={{ textAlign: 'center' }}>
          <CardContent>
            <Typography variant='h1' sx={{ fontWeight: 'bold', fontSize: 24 }}>Welcome to A+ Games</Typography>
            <Typography>Fun, high-quality, scary games hand-crafted by the A+ Games creator</Typography>
            <SportsEsportsRounded />
          </CardContent>
        </Card>
      </Container>
    </Container>
  );
};
