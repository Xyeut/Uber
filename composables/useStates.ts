export const useErrorNotification = () => useState("error", () => false);

export function displayErrorNotification() {
	const error = useErrorNotification();
	if (error.value) return;

	error.value = true;
	setTimeout(() => (error.value = !error.value), 3000);
}
