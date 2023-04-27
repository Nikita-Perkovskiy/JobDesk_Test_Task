import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";

const MainPage = () => {
  const customTheme = {
    colors: {
      gray: {
        1: "#F5F5F5",
      },
    },
  };
  const theme = useMantineTheme();
  const [burgerOpened, setBurgerOpened] = useState(false);

  return (
    <>
      <AppShell
        navbarOffsetBreakpoint="sm"
        style={{ background: customTheme.colors.gray[1] }}
        navbar={
          <Navbar
            p="md"
            hiddenBreakpoint="sm"
            hidden={!burgerOpened}
            width={{ sm: 200, lg: 300 }}
            style={{ background: customTheme.colors.gray[1], border: "none" }}
          >
            <Text>Application navbar</Text>
          </Navbar>
        }
        header={
          <Header height={{ base: 50, md: 70 }} p="md">
            <div
              style={{ display: "flex", alignItems: "center", height: "100%" }}
            >
              <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                <Burger
                  opened={burgerOpened}
                  onClick={() =>
                    setBurgerOpened((burgerOpened) => !burgerOpened)
                  }
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>

              <Text>Application header</Text>
            </div>
          </Header>
        }
      >
        <Text>Resize app to see responsive navbar in action</Text>
      </AppShell>
    </>
  );
};

export default MainPage;
