import { useCallback, useState } from "react";
import { Alert } from "react-native";
const API = 'https://rn-tansaction-server-api.onrender.com/api';
export const useTransaction = (userId) => {
    const [transaction, setTransaction] = useState([]);
    const [summary, setSummary] = useState({
        balance: 0,
        income: 0,
        expenses: 0,
    });
    const [loading, setLoading] = useState(true);

    const fetchTransactions = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`${API}/transactions/${userId}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setTransaction(data);
        } catch (error) {
            console.error('Failed to fetch transactions:', error);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }, [userId]);

    const fetchSummary = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`${API}/transactions/summary/${userId}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('### Summary Data ###:', data);
            setSummary(data);
        } catch (error) {
            console.error('Failed to fetch summary:', error);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    }, [userId]);

    const loadData = useCallback(async () => {
        if (!userId) return;
        setLoading(true);
        try {
            await Promise.all([fetchTransactions(), fetchSummary()]);
        } catch (error) {
            console.error('Error loading data:', error);
        } finally {
            setLoading(false);
        }
    }, [fetchTransactions, fetchSummary, userId]);

    const deleteTransaction = async (transactionId) => {
        // setLoading(true);
        try {
            const response = await fetch(`${API}/transactions/${transactionId}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            await loadData();
            Alert.alert(
                'Success',
                'Transaction deleted successfully',
                [{ text: 'OK' }]
            );
        } catch (error) {
            console.error('Failed to delete transaction:', error);
            Alert.alert(
                'Error',
                'Failed to delete transaction. Please try again.',
                [{ text: 'OK' }]
            );
        } finally {
            setLoading(false);
        }
    }

    return {
        transaction,
        summary,
        loading,
        loadData,
        deleteTransaction,
    };
}