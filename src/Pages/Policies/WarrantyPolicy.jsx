import { Container, Typography } from '@mui/material';
import React from 'react';

const WarrantyPolicy = () => {
    return (
      <div>
        <Container maxWidth="lg">
          <div style={{padding:"5vh 0vh"}}>
            <Typography variant="h4" textAlign={"center"} fontWeight="bold" gutterBottom>
              Warranty Policy
            </Typography>

            <Typography variant="h6" paragraph>
              Coverage
            </Typography>

            <Typography paragraph>
              Our products are covered by a 7day to 1year
              warranty from the date of purchase. Its vary from product to product  This warranty covers defects
              in materials and workmanship under normal use.
            </Typography>

            <Typography variant="h6" paragraph>
              What's Covered
            </Typography>

            <Typography paragraph>
              We will replace or repair products that are found to be defective
              due to faulty materials or workmanship.
            </Typography>

            <Typography variant="h6" paragraph>
              What's Not Covered
            </Typography>

            <Typography paragraph>
              This warranty does not cover normal wear and tear, including but
              not limited to scratches, dents, or cosmetic damage. The warranty
              also does not cover products that have been subjected to misuse,
              abuse, negligence, or unauthorized modifications.
            </Typography>

            <Typography variant="h6" paragraph>
              Making a Warranty Claim
            </Typography>

            <Typography paragraph>
              If you believe your product is eligible for warranty service,
              please contact our customer service team at [insert contact
              information].
            </Typography>

            <Typography paragraph>
              To initiate a warranty claim, you will need to provide proof of
              purchase, including the order number and date of purchase.
            </Typography>

            <Typography variant="h6" paragraph>
              Resolution
            </Typography>

            <Typography paragraph>
              Upon receiving the defective product, we will assess and determine
              whether to repair or replace it. The decision will be based on the
              nature of the issue. If a repair or replacement is not feasible,
              we may offer a refund at our discretion.
            </Typography>

            <Typography variant="h6" paragraph>
              Limitation of Liability
            </Typography>

            <Typography paragraph>
              Our liability under this warranty is limited to the repair,
              replacement, or refund of the product at our sole discretion. We
              are not liable for any indirect, consequential, or incidental
              damages arising from the use of our products.
            </Typography>

            <Typography paragraph>
              This warranty policy is effective as of [insert effective date]
              and is subject to change without prior notice. Please check our
              website for the most up-to-date warranty information.
            </Typography>

            <Typography paragraph>
              Thank you for choosing Robomart bd. We appreciate your
              trust in our products.
            </Typography>
          </div>
        </Container>
      </div>
    );
};

export default WarrantyPolicy;