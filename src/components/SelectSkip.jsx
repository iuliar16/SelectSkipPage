import React, { useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import styles from "./SelectSkip.module.css";
import { Dropdown, Card, Icon, Grid, CardContent } from "semantic-ui-react";

export default function SelectSkip({
  skips,
  selectedId,
  setSelectedId,
  setBtnDisabled,
  setPrice,
}) {
  const selectedSkip = skips.find((skip) => skip.id === Number(selectedId));

  const detailItems = [
    {
      icon: "user",
      label: `Hire Period: ${selectedSkip.hire_period_days} days`,
      color: undefined,
      className: null,
    },
    {
      icon: selectedSkip.allows_heavy_waste ? "check" : "ban",
      label: selectedSkip.allows_heavy_waste
        ? "Suitable for heavy waste"
        : "Not suitable for Heavy Waste",
      color: selectedSkip.allows_heavy_waste ? "green" : "red",
      className: selectedSkip.allows_heavy_waste
        ? styles.okText
        : styles.dangerText,
    },
    {
      icon: selectedSkip.allowed_on_road ? "check" : "warning sign",
      label: selectedSkip.allowed_on_road
        ? "Allowed on road"
        : "Private property only!",
      color: selectedSkip.allowed_on_road ? "green" : "yellow",
      className: selectedSkip.allowed_on_road
        ? styles.okText
        : styles.warningText,
    },
  ];

  const formatPrice = (price) =>
    !price ? "N/A" : `£${price.toFixed(2)} per week`;

  const dropdownOptions = skips.map((skip) => ({
    key: skip.id,
    value: skip.id,
    text: `${skip.size} Yard Skip – ${formatPrice(skip.price_before_vat)}`,
  }));

  useEffect(() => {
    setBtnDisabled(!selectedSkip?.allows_heavy_waste);
    setPrice(selectedSkip.price_before_vat);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSkip]);

  return (
    <>
      <h1 className={styles.headerName}>Choose Your Skip Size</h1>

      <Grid centered stackable columns={2} equal>
        <Grid.Row className={styles.gridRow}>
          <Grid.Column width={6}>
            <Card fluid className={styles.mainCard}>
              <CardContent>
                <Dropdown
                  className={styles.dropdown}
                  placeholder="Select a Skip"
                  fluid
                  selection
                  options={dropdownOptions}
                  value={selectedId}
                  onChange={(e, { value }) => setSelectedId(value)}
                />

                {selectedSkip && (
                  <Card fluid className={styles.skipCard}>
                    <Card.Content>
                      <Card.Header className={styles.cardHeader}>
                        {selectedSkip.size} Yard Skip
                      </Card.Header>

                      <img
                        className={styles.image}
                        src="/images/ship.jpg"
                        alt={`${selectedSkip.size} Yard Skip`}
                      />
                      <div className={styles.details}>
                        {detailItems.map(
                          ({ icon, label, color, className }, idx) => (
                            <div key={idx} className={styles.detailRow}>
                              <Icon name={icon} color={color} />
                              <strong className={className}>{label}</strong>
                            </div>
                          )
                        )}

                        <div className={styles.price}>
                          {formatPrice(selectedSkip.price_before_vat)}
                        </div>
                      </div>
                    </Card.Content>
                  </Card>
                )}
              </CardContent>
            </Card>
          </Grid.Column>

          <Grid.Column width={6}>
            <Card fluid className={styles.infoCard}>
              <Card.Content>
                <Card.Header>How It Works</Card.Header>

                <img
                  className={styles.skipsPhoto}
                  src="/images/file.png"
                  alt="Skip size guide"
                />

                <div className={styles.warnings}>
                  <div className={styles.warningInfo}>
                    <Icon size="large" color="yellow" name="warning sign" />
                    Heavy waste not allowed for skips over 8 yards.
                  </div>

                  <div className={styles.warningInfo}>
                    <Icon size="large" color="yellow" name="warning sign" />
                    Skips over 10 yards cannot be placed on public roads due to
                    road safety regulations.
                  </div>
                </div>

                <Card.Description>
                  <ol className={styles.list}>
                    <li>Select the skip size that best suits your needs.</li>
                    <li>Confirm the details.</li>
                    <li>We deliver the skip.</li>
                    <li>You fill it and we collect it.</li>
                  </ol>
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}
