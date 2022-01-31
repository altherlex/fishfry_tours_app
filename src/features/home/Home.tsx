import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { ReactComponent as Board } from "static/svg/board.svg";
import { css } from "@emotion/core";
import SEO from "components/SEO";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeroContainer = styled.div``;

const Home = () => {
  return (
    <Container>
      <SEO title="Home" />
      <HeroContainer>
        <Board width={200} height={200} />
      </HeroContainer>

      <Link
        css={css`
          text-decoration: none;
          color: #333;
        `}
        to="/b/1/"
      >
        <p>
          <b>Context</b>
        </p>
        <p>
          Fishfry Tours is a small salmon guiding outfit based out of Cascadia,
          British Columbia - along the coast. They run a seasonal guided sport
          fishing tour of some of the more hidden inlets of Coastal British
          Columbia. In total they have 8 sport fishing boats with 12 guides. At
          any given time there are at least 4 or 5 boats out in the waters.
          Sometimes the boats will meet each other to exchange gear and fuel for
          longer days at sea.
        </p>
        <p>
          The control office maintains a kanban-like control chart on a white
          board which describes the state of each boat. Some of the swimlanes
          are ‘Docked, Outbound to Sea, Inbound to Harbor, Maintenance’
        </p>
        <p>
          The Boat Guides have expressed interest in having the control chart
          accessible online through their mobile phones (whenever there is
          service). Sometimes radio contact to other boats is not possible and
          using satellite services are too expensive to maintain constant
          communication.
        </p>
        <p>
          One of the boat guides is a web developer during the off season and
          offered to build the app. He insists on building it using an Agile
          Approach.
        </p>
        <p>
          The boat guides have varying computer skills. They mainly want to see
          the status of all the guide boats in the area at a glance and be able
          to move their cards into different swimlanes as needed.
        </p>
        <p>
          <b>Personas</b>
        </p>
        <p>
          Bob is 26 and has been a guide for most of his life. He has a dog
          named Wilfred that has spent more time at sea than on land. Bob is not
          very technically savvy but he does have a newer mobile phone. He wants
          to be able to let other guides and operators know the status of his
          vessel. Especially if he is inbound or outbound.
        </p>
        <p>
          Marie is 38 and maintains several different guiding jobs throughout
          the year. She is very technically savvy. She prefers larger displays
          and so tethers wifi to a laptop that is hard mounted in the wheelhouse
          of the boat she operates.
        </p>
        <p>
          Both guides are typically quite busy tending to guests and so prefer
          performing actions as quick and efficiently as possible.
        </p>
        <Button
          color="primary"
          variant="contained"
          style={{ textTransform: "none" }}
        >
          View Board
        </Button>
      </Link>
    </Container>
  );
};

export default Home;
