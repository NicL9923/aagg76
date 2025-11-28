import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-100 px-4 py-12 font-sans dark:bg-neutral-900">
      <Container maxWidth="md">
        <Card elevation={6} sx={{ borderRadius: 5 }}>
          <CardContent sx={{ p: { xs: 4, md: 6 } }}>
            <Stack spacing={4}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Chip
                  color="primary"
                  icon={<SportsEsportsIcon />}
                  label="A+ Games"
                  sx={{ fontWeight: 600 }}
                />
                <Typography variant="overline" color="text.secondary">
                  indie horror experiences
                </Typography>
              </Stack>

              <Stack spacing={2}>
                <Typography variant="h3" component="h1" sx={{ color: 'royalblue' }}>
                  Fun, scary, highquality, and handcrafted for thrill-seekers :)
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  We craft short-form horror adventures with replayable twists so
                  you can challenge friends, stream the scares, and relive the
                  adrenaline.
                </Typography>
              </Stack>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                component="form"
              >
                <TextField
                  fullWidth
                  type="email"
                  label="Join the early access list"
                  placeholder="you@example.com"
                  variant="outlined"
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ minWidth: 71, height: 72, color: 'white', backgroundColor: 'red', fontFamily: 'cursive', fontSize: 12 }}
                >
                  Notify me
                </Button>
              </Stack>

              <Divider flexItem>
                <Typography variant="caption" color="text.secondary">
                  Sneak peek metrics
                </Typography>
              </Divider>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
                {["5 immersive worlds", "20+ jump scares", "Co-op friendly"].map(
                  (stat) => (
                    <Box
                      key={stat}
                      sx={{
                        flex: 1,
                        backgroundColor: "action.hover",
                        borderRadius: 3,
                        px: 3,
                        py: 2.5,
                      }}
                    >
                      <Typography variant="subtitle1" fontWeight={600}>
                        {stat}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Sneak preview of what&rsquo;s coming this season.
                      </Typography>
                    </Box>
                  )
                )}
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}
