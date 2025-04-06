import { Container, Loader } from "semantic-ui-react";
import SelectSkip from "./components/SelectSkip";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import { useFetchSkips } from "./hooks/useFetchSkips";

export default function App() {
  const { skips, loading, selectedId, setSelectedId } = useFetchSkips();
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [price, setPrice] = useState(0);

  if (loading) {
    return (
      <Container textAlign="center" style={{ padding: "6em 0" }}>
        <Loader active inline="centered" size="large">
        </Loader>
      </Container>
    );
  }

  return (
    <div>
      <Header currentStep="Select Skip" />
      <SelectSkip
        skips={skips}
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        setBtnDisabled={setBtnDisabled}
        setPrice={setPrice}
      />
      <Footer btnDisabled={btnDisabled} price={price} />
    </div>
  );
}
