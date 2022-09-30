import {
  Card,
  EmptyState,
  Layout,
  Page,
  SkeletonBodyText,
} from "@shopify/polaris";
import { useNavigate, TitleBar, Loading } from "@shopify/app-bridge-react";
import { QRCodeIndex } from "../components";

export default function HomePage() {
  const navigate = useNavigate();

  const isLoading = false;
  const isRefetching = false;
  const QRCodes = [
    {
      createdAt: "2022-06-13",
      destination: "checkout",
      title: "My first QR code",
      id: 1,
      discountCode: "SUMMERDISCOUNT",
      product: {
        title: "Faded t-shirt",
      },
    },
    {
      createdAt: "2022-06-13",
      destination: "product",
      title: "My second QR code",
      id: 2,
      discountCode: "WINTERDISCOUNT",
      product: {
        title: "Cozy parka",
      },
    },
    {
      createdAt: "2022-06-13",
      destination: "product",
      title: "QR code for deleted product",
      id: 3,
      product: {
        title: "Deleted product",
      },
    },
  ];

  const loadingMarkup = isLoading ? (
    <Card sectioned>
      <Loading />
      <SkeletonBodyText />
    </Card>
  ) : null;

  const qrCodesMarkup = QRCodes?.length ? (
    <QRCodeIndex QRCodes={QRCodes} loading={isRefetching} />
  ) : null;

  const emptyStateMarkup =
    !isLoading && !QRCodes?.length ? (
      <Card sectioned>
        <EmptyState
          heading="Create unitque QR codes for you product"
          action={{
            content: "Create QR code",
            onAction: () => navigate("/qrcodes/new"),
          }}
          image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
        >
          <p>
            Allow customers to scan codes and buy products using their phones.
          </p>
        </EmptyState>
      </Card>
    ) : null;

  return (
    <Page fullWidth={!!qrCodesMarkup}>
      <TitleBar
        title="QR codes"
        primaryAction={{
          content: "Create QR code",
          onAction: () => navigate("/qrcodes/new"),
        }}
      />
      <Layout>
        <Layout.Section>
          {loadingMarkup}
          {qrCodesMarkup}
          {emptyStateMarkup}
        </Layout.Section>
      </Layout>
    </Page>
  );
  // return (
  //   <Page narrowWidth>
  //     <TitleBar title="App name" primaryAction={null} />
  //     <Layout>
  //       <Layout.Section>
  //         <Card sectioned>
  //           <Stack
  //             wrap={false}
  //             spacing="extraTight"
  //             distribution="trailing"
  //             alignment="center"
  //           >
  //             <Stack.Item fill>
  //               <TextContainer spacing="loose">
  //                 <Heading>Nice work on building a Shopify app 🎉</Heading>
  //                 <p>
  //                   Your app is ready to explore! It contains everything you
  //                   need to get started including the{" "}
  //                   <Link url="https://polaris.shopify.com/" external>
  //                     Polaris design system
  //                   </Link>
  //                   ,{" "}
  //                   <Link url="https://shopify.dev/api/admin-graphql" external>
  //                     Shopify Admin API
  //                   </Link>
  //                   , and{" "}
  //                   <Link
  //                     url="https://shopify.dev/apps/tools/app-bridge"
  //                     external
  //                   >
  //                     App Bridge
  //                   </Link>{" "}
  //                   UI library and components.
  //                 </p>
  //                 <p>
  //                   Ready to go? Start populating your app with some sample
  //                   products to view and test in your store.{" "}
  //                 </p>
  //                 <p>
  //                   Learn more about building out your app in{" "}
  //                   <Link
  //                     url="https://shopify.dev/apps/getting-started/add-functionality"
  //                     external
  //                   >
  //                     this Shopify tutorial
  //                   </Link>{" "}
  //                   📚{" "}
  //                 </p>
  //               </TextContainer>
  //             </Stack.Item>
  //             <Stack.Item>
  //               <div style={{ padding: "0 20px" }}>
  //                 <Image
  //                   source={trophyImage}
  //                   alt="Nice work on building a Shopify app"
  //                   width={120}
  //                 />
  //               </div>
  //             </Stack.Item>
  //           </Stack>
  //         </Card>
  //       </Layout.Section>
  //       <Layout.Section>
  //         <ProductsCard />
  //       </Layout.Section>
  //     </Layout>
  //   </Page>
  // );
}
