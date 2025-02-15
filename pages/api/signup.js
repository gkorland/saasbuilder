import { customerUserSignUp } from "src/server/api/customer-user";

export default async function handleSignup(nextRequest, nextResponse) {
  console.log("Request body", nextRequest.body);

  if (nextRequest.method === "POST") {
    try {
      const response = await customerUserSignUp(nextRequest.body);
      nextResponse.status(200).send();
    } catch (error) {
      console.error(error);
      let defaultErrorMessage = "Something went wrong. Please retry";

      if (
        error.name === "ProviderAuthError" ||
        error?.response?.status === undefined
      ) {
        nextResponse.status(500).send({
          message: defaultErrorMessage,
        });
      } else {
        nextResponse.status(error.response?.status || 500).send({
          message: error.response?.data?.message || defaultErrorMessage,
        });
      }
    }
  } else {
    nextResponse.status(404).json({
      message: "Endpoint not found",
    });
  }
}
