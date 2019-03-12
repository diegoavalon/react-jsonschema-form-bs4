import { EhBanner } from '../widgets';

export const originalEligibilitySchema = {
	type: "object",
	properties: {
		lifeEvents: {
		type: "string",
		enum: ["lostCoverage", "recentMarried", "permanentMove", "newChild", "newCitizen", "other", "needInsurance"],
		enumNames: [
			"I recently lost or am losing coverage",
			"Recently married",
			"Permanent move to a new coverage area",
			"Birth or adoption of a child",
			"Recently gained citizenship",
			"Other",
			"Neither, but I still need insurance!",
		]
		},
		altOptionsAlert: {
		type: "string",
		},
		congratulationsAlert: {
		type: "string"
		},
		dateOfQualifyingEvent: {
		type: "string",
		title: "When did this event happen ☝️? "
		},
		otherEvent: {
		type: "string",
		title: "Please describe your life event"
		},
		isUSCitizen: {
		type: "boolean",
		title: "I'm a U.S. citizen",
		},
		qualifiesGovSubsidy: {
		type: "boolean",
		title: "I'm not enrolled in or qualify for Medicare benefits"
		}
	}
};

export const originalEligibilityUISchema = {
	"ui:order": ['lifeEvents', 'congratulationsAlert', 'altOptionsAlert', 'otherEvent', 'dateOfQualifyingEvent', 'isUSCitizen', 'qualifiesGovSubsidy'],
	lifeEvents: {
		classNames: 'selectable-card--stacked',
		"ui:widget": "radio",
		"ui:title": "In 2019, have any of the following life events happened to you?",
		"ui:options": {
		selectable: true
		}
	},
	congratulationsAlert: {
		condition: 'lifeEvents=recentMarried,newChild,newCitizen',
		"ui:widget": EhBanner,
		"ui:options": {
		label: false,
		title: "Wow, congratulations! 🎉",
		text: 'Did you know the longest recorded marriage lasted 91 years and 12 days?'
		},
		classNames: 'animate-in'
	},
	altOptionsAlert: {
		condition: 'lifeEvents=needInsurance',
		"ui:widget": EhBanner,
		"ui:options": {
		label: false,
		title: "You came to the right place!",
		text: 'eHealth is the largest health insurance platform with over 1,000+ low-cost, alternative plans.'
		},
		classNames: 'animate-in'
	},
	otherEvent: {
		condition: 'lifeEvents=other',
		classNames: 'animate-in'
	},
	dateOfQualifyingEvent: {
		condition: 'lifeEvents=lostCoverage,recentMarried,permanentMove,newChild,newCitizen,other',
		classNames: 'animate-in'
	},
	isUSCitizen: {
		"ui:widget": "checkbox",
		"ui:options": {
		label: false
		}
	},
	qualifiesGovSubsidy: {
		classNames: "mt-neg-lg",
		"ui:widget": "checkbox",
		"ui:options": {
		label: false
		}
	}
};
