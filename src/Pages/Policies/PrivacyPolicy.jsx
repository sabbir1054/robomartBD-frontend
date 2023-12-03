import { Container, Typography } from "@mui/material";
import React from "react";

const PrivacyPolicy = () => {
  return (
    <Container maxWidth={"lg"} style={{ padding: "5vh 0" }}>
      <Typography textAlign={"center"} marginTop={5} variant="h4">
        Terms & Conditions
      </Typography>
      <Typography paragraph>
        Please carefully read these terms of service before using the Robomart
        Bd website or placing an order. Your use of this website confirms your
        unconditional acceptance of the following terms of service. If you do
        not agree with these terms, it is recommended that you do not use this
        website.
      </Typography>
      {/* Returning Purchased Items */}

      <Typography fontWeight={"bold"} variant="h5" gutterBottom>
        Returning Purchased Items
      </Typography>
      <Typography paragraph>
        Robomart Bd accepts returns for unaffected development boards,
        programmers, tools, cables, etc. "Unaffected" means the device has never
        been powered up, programmed, or otherwise altered. Returns cannot be
        accepted for items that have had electrical power applied or have been
        programmed, changed, or affected. Additionally, products shipped in
        sealed packages will not be considered "Unaffected" if the seal is
        opened or damaged by the customer.
      </Typography>

      {/* Shipping Limitations */}

      <Typography fontWeight={"bold"} variant="h5" gutterBottom>
        Shipping Limitations
      </Typography>
      <Typography paragraph>
        Orders will be shipped to the purchaser's designated address, provided
        it is accessible and within the political borders of Bangladesh. The
        risk of loss of purchased items transfers to the customer upon delivery
        to the carrier. Customers are responsible for initiating claims for
        damaged or lost shipments.
      </Typography>

      <Typography fontWeight={"bold"} variant="h5" gutterBottom>
        Products, Content, and Specifications
      </Typography>
      <Typography paragraph>
        Product features, content, specifications, images, and prices on
        www.robomartbd.com are subject to change without notice. Robomart Bd
        strives to accurately display product attributes, but actual colors may
        vary depending on computer systems. The inclusion of products on the
        website does not guarantee continuous availability, and items may be
        modified or removed without notice. It is the customer's responsibility
        to comply with all applicable laws regarding the possession, use, and
        sale of purchased items.
      </Typography>
      <Typography fontWeight={"bold"} variant="h5" gutterBottom>
        Accuracy of Information
      </Typography>
      <Typography paragraph>
        While efforts are made to ensure the accuracy, completeness, and
        currency of information on the website, occasional inaccuracies may
        occur. Robomart Bd reserves the right to make changes to product
        information, prices, and availability without notice. Order confirmation
        emails do not constitute acceptance of an order, and Robomart Bd may
        limit order quantities or refuse service without prior notice.
      </Typography>
      <Typography fontWeight={"bold"} variant="h5" gutterBottom>
        Use of this Website
      </Typography>
      <Typography paragraph>
        The design, text, graphics, and other materials on this website are
        protected by copyright, trademark, and other laws. Unauthorized use may
        violate copyright and trademark laws. Certain trademarks on this website
        are owned by Robomart Bd and its affiliates, and others belong to their
        respective owners.
      </Typography>
      <Typography fontWeight={"bold"} variant="h5" gutterBottom>
        Third-Party Links
      </Typography>
      <Typography paragraph>
        The website may contain links to third-party websites for convenience.
        Robomart Bd is not responsible for the content or information on these
        external sites. Use of third-party links is at the user's own risk.
      </Typography>
      <Typography fontWeight={"bold"} variant="h5" gutterBottom>
        Inappropriate Material
      </Typography>
      <Typography paragraph>
        Users are prohibited from posting unlawful, threatening, defamatory,
        libelous, obscene, or profane material. Robomart Bd may take necessary
        action, including removing materials, if a violation is detected.
      </Typography>
      <Typography fontWeight={"bold"} variant="h5" gutterBottom>
        User Information
      </Typography>
      <Typography paragraph>
        User Communications are considered non-confidential and non-proprietary.
        Robomart Bd may use these communications for any purpose, including
        reproduction and marketing. The website may monitor or review User
        Communications but has no obligation to do so.
      </Typography>

      {/* Disclaimer */}

      <Typography fontWeight={"bold"} variant="h5" gutterBottom>
        Disclaimer
      </Typography>
      <Typography paragraph>
        The information, materials, and services on this website are provided
        "as is" without warranties. Robomart Bd does not warrant the accuracy or
        completeness of information and may update it at any time.
      </Typography>

      {/* Limitations of Liability */}

      <Typography fontWeight={"bold"} variant="h5" gutterBottom>
        Limitations of Liability
      </Typography>
      <Typography  paragraph>
        Robomart Bd is not liable for damages or viruses/malware resulting from
        website use. In no event will Robomart Bd be liable for indirect,
        special, punitive, incidental, or consequential damages.
      </Typography>

      {/* Caution */}

      <Typography variant="h5" fontWeight={"bold"} gutterBottom>
        Caution
      </Typography>
      <Typography paragraph>
        Products are not authorized for use in life support devices or systems.
        Buyers agree to indemnify Robomart Bd from any claims arising from
        unauthorized product use.
      </Typography>
    </Container>
  );
};

export default PrivacyPolicy;
