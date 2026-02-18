import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useSubmitInquiry } from '../../hooks/useQueries';

interface InquiryFormData {
  name: string;
  phone: string;
  email: string;
  vehicle: string;
  service: string;
  message: string;
}

const services = [
  'Audio System Installation',
  'Camera & Sensor Fitting',
  'LED & Lighting Upgrades',
  'Dashboard Accessories',
  'Speaker Systems',
  'Connectivity Solutions',
  'Security Systems',
  'Performance Accessories',
  'Other / Custom',
];

export default function InquiryForm() {
  const [selectedService, setSelectedService] = useState('');
  const { register, handleSubmit, formState: { errors }, reset } = useForm<InquiryFormData>();
  const submitInquiry = useSubmitInquiry();

  const onSubmit = async (data: InquiryFormData) => {
    try {
      await submitInquiry.mutateAsync({
        name: data.name,
        phone: data.phone,
        email: data.email || null,
        vehicle: data.vehicle || null,
        service: selectedService,
        message: data.message,
      });
      reset();
      setSelectedService('');
    } catch (error) {
      console.error('Failed to submit inquiry:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Success Message */}
      {submitInquiry.isSuccess && (
        <Alert className="bg-primary/10 border-primary">
          <CheckCircle2 className="h-4 w-4 text-primary" />
          <AlertDescription className="text-primary">
            Thank you for your inquiry! We'll get back to you within 24 hours.
          </AlertDescription>
        </Alert>
      )}

      {/* Error Message */}
      {submitInquiry.isError && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Failed to submit your inquiry. Please try again or contact us directly.
          </AlertDescription>
        </Alert>
      )}

      {/* Name Field */}
      <div className="space-y-2">
        <Label htmlFor="name">
          Name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="name"
          {...register('name', { required: 'Name is required' })}
          placeholder="Your full name"
          className={errors.name ? 'border-destructive' : ''}
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      {/* Phone Field */}
      <div className="space-y-2">
        <Label htmlFor="phone">
          Phone <span className="text-destructive">*</span>
        </Label>
        <Input
          id="phone"
          type="tel"
          {...register('phone', { 
            required: 'Phone number is required',
            pattern: {
              value: /^[0-9\s\-\+\(\)]+$/,
              message: 'Please enter a valid phone number'
            }
          })}
          placeholder="(555) 123-4567"
          className={errors.phone ? 'border-destructive' : ''}
        />
        {errors.phone && (
          <p className="text-sm text-destructive">{errors.phone.message}</p>
        )}
      </div>

      {/* Email Field (Optional) */}
      <div className="space-y-2">
        <Label htmlFor="email">Email (Optional)</Label>
        <Input
          id="email"
          type="email"
          {...register('email', {
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Please enter a valid email address'
            }
          })}
          placeholder="your.email@example.com"
          className={errors.email ? 'border-destructive' : ''}
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      {/* Vehicle Field (Optional) */}
      <div className="space-y-2">
        <Label htmlFor="vehicle">Vehicle Make & Model (Optional)</Label>
        <Input
          id="vehicle"
          {...register('vehicle')}
          placeholder="e.g., 2020 Honda Civic"
        />
      </div>

      {/* Service Selection */}
      <div className="space-y-2">
        <Label htmlFor="service">
          Requested Service <span className="text-destructive">*</span>
        </Label>
        <Select value={selectedService} onValueChange={setSelectedService} required>
          <SelectTrigger className={!selectedService && submitInquiry.isError ? 'border-destructive' : ''}>
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service} value={service}>
                {service}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {!selectedService && submitInquiry.isError && (
          <p className="text-sm text-destructive">Please select a service</p>
        )}
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <Label htmlFor="message">
          Message <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="message"
          {...register('message', { required: 'Message is required' })}
          placeholder="Tell us about your project or any questions you have..."
          rows={5}
          className={errors.message ? 'border-destructive' : ''}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button 
        type="submit" 
        className="w-full" 
        size="lg"
        disabled={submitInquiry.isPending || !selectedService}
      >
        {submitInquiry.isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          'Send Inquiry'
        )}
      </Button>
    </form>
  );
}
