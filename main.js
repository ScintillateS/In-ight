document.getElementById('budget-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const income = parseFloat(document.getElementById('income').value);
    // Gather other inputs and pass to calculation functions
    updateChart();  // Update the chart with new data
    performPrediction();  // Perform and display predictions
});
