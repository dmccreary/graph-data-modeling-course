// Customer Entity Types - Educational vis-network visualization
// Demonstrates different customer entity types and their relationships

// ===========================================
// COLOR DEFINITIONS
// ===========================================
const entityColors = {
    individual: {
        background: '#4A90D9',
        border: '#2E6CB3',
        highlight: { background: '#6BA8E5', border: '#2E6CB3' },
        hover: { background: '#6BA8E5', border: '#2E6CB3' }
    },
    household: {
        background: '#7CB342',
        border: '#558B2F',
        highlight: { background: '#9CCC65', border: '#558B2F' },
        hover: { background: '#9CCC65', border: '#558B2F' }
    },
    corporate: {
        background: '#FF9800',
        border: '#E65100',
        highlight: { background: '#FFB74D', border: '#E65100' },
        hover: { background: '#FFB74D', border: '#E65100' }
    },
    organization: {
        background: '#9C27B0',
        border: '#6A1B9A',
        highlight: { background: '#BA68C8', border: '#6A1B9A' },
        hover: { background: '#BA68C8', border: '#6A1B9A' }
    }
};

// ===========================================
// ENTITY INFORMATION
// ===========================================
const entityInfo = {
    individual: {
        title: 'Individual Customer',
        description: 'A single person who interacts with your business. The most granular customer entity type.',
        properties: [
            'customer_id: Unique identifier',
            'first_name, last_name: Personal name',
            'email: Contact email',
            'date_of_birth: For age verification',
            'loyalty_tier: Membership level'
        ],
        context: 'B2C retail, subscriptions, personal services'
    },
    household: {
        title: 'Household',
        description: 'A family or group of individuals living at the same address, often sharing purchases and accounts.',
        properties: [
            'household_id: Unique identifier',
            'address: Shared location',
            'household_size: Number of members',
            'household_income: Combined income bracket',
            'primary_contact: Main account holder'
        ],
        context: 'Utilities, insurance, streaming services, grocery delivery'
    },
    corporate: {
        title: 'Corporate Customer',
        description: 'A business entity that purchases products or services. May have parent/subsidiary relationships.',
        properties: [
            'company_id: Unique identifier',
            'company_name: Legal business name',
            'industry: Business sector',
            'employee_count: Company size',
            'annual_revenue: Business scale'
        ],
        context: 'B2B sales, enterprise software, wholesale'
    },
    organization: {
        title: 'Organization',
        description: 'Non-profit, government, or institutional entity with unique purchasing and compliance needs.',
        properties: [
            'org_id: Unique identifier',
            'org_name: Official name',
            'org_type: Non-profit/Government/Education',
            'tax_exempt: Tax status',
            'compliance_level: Regulatory requirements'
        ],
        context: 'Government contracts, educational institutions, NGOs'
    }
};

// ===========================================
// NODE DEFINITIONS
// ===========================================
// Individual at center, others surrounding
const nodeData = [
    // Central Individual node
    {
        id: 'ind1',
        label: 'Individual\n(Person)',
        x: -200,
        y: 0,
        shape: 'circle',
        size: 45,
        color: entityColors.individual,
        font: { color: '#fff', size: 14, face: 'Arial', bold: true },
        entityType: 'individual'
    },
    // Second Individual for relationship demonstrations
    {
        id: 'ind2',
        label: 'Individual\n(Employee)',
        x: -200,
        y: 180,
        shape: 'circle',
        size: 40,
        color: entityColors.individual,
        font: { color: '#fff', size: 12, face: 'Arial' },
        entityType: 'individual'
    },
    // Household - upper left
    {
        id: 'house1',
        label: 'Household\n(Family Unit)',
        x: -400,
        y: -120,
        shape: 'box',
        borderRadius: 10,
        color: entityColors.household,
        font: { color: '#fff', size: 14, face: 'Arial', bold: true },
        entityType: 'household'
    },
    // Corporate - upper right
    {
        id: 'corp1',
        label: 'Corporate\n(Parent Co.)',
        x: 50,
        y: -120,
        shape: 'box',
        color: entityColors.corporate,
        font: { color: '#fff', size: 14, face: 'Arial', bold: true },
        entityType: 'corporate'
    },
    // Subsidiary Corporate
    {
        id: 'corp2',
        label: 'Corporate\n(Subsidiary)',
        x: 50,
        y: 80,
        shape: 'box',
        color: entityColors.corporate,
        font: { color: '#fff', size: 12, face: 'Arial' },
        entityType: 'corporate'
    },
    // Organization - lower left
    {
        id: 'org1',
        label: 'Organization\n(Non-Profit)',
        x: -400,
        y: 120,
        shape: 'hexagon',
        size: 40,
        color: entityColors.organization,
        font: { color: '#fff', size: 13, face: 'Arial', bold: true },
        entityType: 'organization'
    },
    // Second Organization for partnership
    {
        id: 'org2',
        label: 'Organization\n(Government)',
        x: -400,
        y: 280,
        shape: 'hexagon',
        size: 35,
        color: entityColors.organization,
        font: { color: '#fff', size: 11, face: 'Arial' },
        entityType: 'organization'
    }
];

// ===========================================
// EDGE DEFINITIONS
// ===========================================
const edgeData = [
    // Individual MEMBER_OF Household
    {
        from: 'ind1',
        to: 'house1',
        label: 'MEMBER_OF',
        arrows: { to: { enabled: true, scaleFactor: 1 } },
        color: { color: '#7CB342', highlight: '#9CCC65' },
        font: { size: 11, color: '#555', strokeWidth: 3, strokeColor: '#fff' },
        smooth: { type: 'curvedCW', roundness: 0.2 }
    },
    // Individual EMPLOYED_BY Corporate
    {
        from: 'ind1',
        to: 'corp1',
        label: 'EMPLOYED_BY',
        arrows: { to: { enabled: true, scaleFactor: 1 } },
        color: { color: '#FF9800', highlight: '#FFB74D' },
        font: { size: 11, color: '#555', strokeWidth: 3, strokeColor: '#fff' },
        smooth: { type: 'curvedCW', roundness: 0.15 }
    },
    // Individual AFFILIATED_WITH Organization
    {
        from: 'ind1',
        to: 'org1',
        label: 'AFFILIATED_WITH',
        arrows: { to: { enabled: true, scaleFactor: 1 } },
        color: { color: '#9C27B0', highlight: '#BA68C8' },
        font: { size: 11, color: '#555', strokeWidth: 3, strokeColor: '#fff' },
        smooth: { type: 'curvedCW', roundness: 0.2 }
    },
    // Second Individual EMPLOYED_BY Corporate (subsidiary)
    {
        from: 'ind2',
        to: 'corp2',
        label: 'EMPLOYED_BY',
        arrows: { to: { enabled: true, scaleFactor: 1 } },
        color: { color: '#FF9800', highlight: '#FFB74D' },
        font: { size: 10, color: '#555', strokeWidth: 3, strokeColor: '#fff' },
        smooth: { type: 'curvedCW', roundness: 0.15 }
    },
    // Corporate SUBSIDIARY_OF Corporate
    {
        from: 'corp2',
        to: 'corp1',
        label: 'SUBSIDIARY_OF',
        arrows: { to: { enabled: true, scaleFactor: 1 } },
        color: { color: '#E65100', highlight: '#FF9800' },
        font: { size: 11, color: '#555', strokeWidth: 3, strokeColor: '#fff' },
        smooth: { type: 'curvedCW', roundness: 0.3 },
        dashes: [5, 5]
    },
    // Organization PARTNERED_WITH Organization
    {
        from: 'org1',
        to: 'org2',
        label: 'PARTNERED_WITH',
        arrows: { to: { enabled: true, scaleFactor: 1 }, from: { enabled: true, scaleFactor: 1 } },
        color: { color: '#6A1B9A', highlight: '#9C27B0' },
        font: { size: 10, color: '#555', strokeWidth: 3, strokeColor: '#fff' },
        smooth: { type: 'curvedCW', roundness: 0.25 },
        dashes: [5, 5]
    }
];

// ===========================================
// ENVIRONMENT DETECTION
// ===========================================
function isInIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

function isSaveEnabled() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('enable-save') === 'true';
}

// ===========================================
// NETWORK INITIALIZATION
// ===========================================
let network, nodes, edges;

function positionView() {
    if (network) {
        network.moveTo({
            position: { x: -170, y: 80 },
            scale: 0.95,
            animation: false
        });
    }
}

function initializeNetwork() {
    // Create DataSets
    nodes = new vis.DataSet(nodeData);
    edges = new vis.DataSet(edgeData);

    // Determine interaction settings
    const enableMouseInteraction = !isInIframe() || isSaveEnabled();

    const options = {
        layout: {
            improvedLayout: false
        },
        physics: {
            enabled: false
        },
        interaction: {
            selectConnectedEdges: true,
            hover: true,
            hoverConnectedEdges: true,
            dragNodes: isSaveEnabled(),
            dragView: enableMouseInteraction,
            zoomView: enableMouseInteraction,
            navigationButtons: true,
            keyboard: {
                enabled: true,
                bindToWindow: false
            }
        },
        nodes: {
            margin: 12,
            font: {
                size: 14,
                face: 'Arial'
            },
            borderWidth: 3,
            shadow: {
                enabled: true,
                color: 'rgba(0,0,0,0.2)',
                size: 8,
                x: 3,
                y: 3
            }
        },
        edges: {
            width: 2.5,
            selectionWidth: 4,
            hoverWidth: 3.5,
            shadow: {
                enabled: true,
                color: 'rgba(0,0,0,0.1)',
                size: 3,
                x: 1,
                y: 1
            }
        }
    };

    const container = document.getElementById('network');
    const data = { nodes: nodes, edges: edges };
    network = new vis.Network(container, data, options);

    // Position view after initialization
    setTimeout(positionView, 200);

    // Event handlers
    network.on('click', handleNodeClick);
    network.on('hoverNode', handleNodeHover);
    network.on('blurNode', handleNodeBlur);
}

// ===========================================
// EVENT HANDLERS
// ===========================================
function handleNodeClick(params) {
    if (params.nodes.length > 0) {
        const nodeId = params.nodes[0];
        const node = nodes.get(nodeId);
        if (node && node.entityType) {
            updateStatusPanel(node.entityType);
        }
    }
}

function handleNodeHover(params) {
    document.body.style.cursor = 'pointer';
}

function handleNodeBlur(params) {
    document.body.style.cursor = 'default';
}

function updateStatusPanel(entityType) {
    const statusInfo = document.getElementById('status-info');
    const statusTitle = document.querySelector('.status-title');
    const statusText = document.getElementById('status-text');

    const info = entityInfo[entityType];

    // Update border color
    statusInfo.className = 'status-info ' + entityType;

    // Update title
    statusTitle.textContent = info.title;

    // Build content
    let content = `<p>${info.description}</p>`;
    content += '<div class="property-list">';
    content += '<strong>Typical Properties:</strong>';
    info.properties.forEach(prop => {
        content += `<div class="property-item">${prop}</div>`;
    });
    content += '</div>';
    content += `<p style="margin-top: 10px; font-style: italic;"><strong>Common in:</strong> ${info.context}</p>`;

    statusText.innerHTML = content;
}

// ===========================================
// SAVE FUNCTIONALITY (for editor mode)
// ===========================================
function saveNodePositions() {
    const positions = network.getPositions();

    const updatedNodes = nodeData.map(node => {
        if (positions[node.id]) {
            return {
                ...node,
                x: Math.round(positions[node.id].x),
                y: Math.round(positions[node.id].y)
            };
        }
        return node;
    });

    const exportData = {
        metadata: {
            title: 'Customer Entity Types',
            lastUpdated: new Date().toISOString().split('T')[0]
        },
        nodes: updatedNodes,
        edges: edgeData
    };

    const jsonString = JSON.stringify(exportData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'customer-models-data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// ===========================================
// INITIALIZATION
// ===========================================
document.addEventListener('DOMContentLoaded', function() {
    initializeNetwork();

    // Handle window resize
    window.addEventListener('resize', function() {
        setTimeout(positionView, 100);
    });

    // Add save button if in editor mode
    if (isSaveEnabled()) {
        const container = document.querySelector('.container');
        const saveBtn = document.createElement('button');
        saveBtn.textContent = 'Save Positions';
        saveBtn.style.cssText = 'position: absolute; bottom: 20px; right: 20px; padding: 10px 20px; background: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer; z-index: 100;';
        saveBtn.addEventListener('click', saveNodePositions);
        container.appendChild(saveBtn);
    }
});
