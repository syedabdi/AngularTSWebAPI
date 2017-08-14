
 
 

 


declare module SMC.XTier.VHR.DTO.Queries {
	interface VHRSearchModel {
		ipa: string;
		membid: string;
	}
}
declare module SMC.XTier.VHR.DTO.Results {
	interface HealthRecord {
		MembersData: SMC.XTier.VHR.DTO.Results.Members[];
	}
	interface Members {
		Age: number;
		Companyid: string;
		MemberFirstName: string;
		Memberid: string;
		MemberLastName: string;
		PCPName: string;
	}
}


